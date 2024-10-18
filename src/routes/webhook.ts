import { Request, Response, NextFunction, Router } from "express";
import GustoServiceClient from "../serviceClient/gustoServiceClient";
import { EventType, GustoEvent } from "../models/gustoEvents";
import HcServiceClient from "../serviceClient/hcServiceClient";
import { writeMessageLogs } from "../helpers/gustoAppHelper";
export const hookRoute = Router();
var gustoServiceClient = new GustoServiceClient();
var hcServiceClient = new HcServiceClient();
hookRoute.post('/ReceiveEvents', async function (req: Request, res: Response, next: NextFunction) {
  try {
    var payload: GustoEvent = req.body;
    writeMessageLogs(payload,false);
    res.status(200).send('Event received');
    if(GustoServiceClient.lastTokenDetails && GustoServiceClient.lastTokenDetails.created_at < ((Date.now()/1000)-7200))
      {
        await gustoServiceClient.refreshToken();
      }


    if (payload.event_type == EventType.EmployeeCreated) {
      
      var employeeDetails = await gustoServiceClient.getEmployee(payload.entity_uuid);
      if (employeeDetails) {
        hcServiceClient.createExchangeMailbox({
          CreateNewUser: true,
          MailboxType: "usermailbox",
          DisplayName: employeeDetails.email.split('@')[0],
          Password: "P@ssw0rd",
          MaildomainName: "guesto.com",
          CResourceId: 9,
          OrganizationId: 576
        })
      }
    }

    else if(payload.event_type == EventType.EmployeeTerminated)
    {
      var employeeDetails = await gustoServiceClient.getEmployee(payload.entity_uuid);
      if (employeeDetails) {
         var mailboxDetails= await hcServiceClient.getMailboxByMailboxName(employeeDetails.email.split('@')[0]);
         if(mailboxDetails)
         {
          await hcServiceClient.deleteUserMailbox(mailboxDetails.MailboxId);
         }else{
          writeMessageLogs("No mailbox found against: "+employeeDetails.first_name + "." + employeeDetails.last_name)
         }

      }
    }

  } catch (err: any) {
    writeMessageLogs(err);
    console.error(`Error while getting data`, err.message);
  }
  
});

hookRoute.get('/AuthCallback', async function (req: Request, res: Response, next: NextFunction) {
  try {
   // var gustoServiceClient = new GustoServiceClient();
    var code = req.query["code"];
    writeMessageLogs(code,false);
    gustoServiceClient.authorizeUsingAuthorizationCode(code);
    res.status(200).send('Access Token Generated Successfully');
  } catch (err: any) {
    console.error(`Error while getting data`, err.message);
    next(err);
  }
});
