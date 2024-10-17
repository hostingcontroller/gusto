import HcServiceClient from "../serviceClient/hcServiceClient.ts";

export async function App() {
    try {
      console.log("starting");
      var hcServiceClient= new HcServiceClient();
       await hcServiceClient.createExchangeMailbox( {
          CreateNewUser: true,
          MailboxType: "usermailbox",
          DisplayName: "test3241",
          Password: "Password",
          MaildomainName: "guesto.com",
          CResourceId: 9,
          OrganizationId: 576,
        });
    } catch (err) {
      console.log("error: ", err);
    }
  }