import { hcApplicationName, hcBaseURL, hcPassword, hcUser } from "../config";
import * as hc from "hostingcontroller-sdk";
class HcServiceClient {

    private baseUrl: string;
    private username:string;
    private password: string;
    private token: {
      b64: string;
      expires: number;
    } | null;
    constructor() {
        this.baseUrl= hcBaseURL;
        this.username= hcUser;
        this.password= hcPassword;
       hc.client.setConfig({
          baseUrl:  this.baseUrl
        })

        
        hc.client.interceptors.request.use(async (request, options) => {
      if(!request.url.endsWith('/auth-tokens'))
        {
          if (this.token == null ||this.token.expires < new Date().valueOf() - 10000) {
            this.token = await this.refreshToken();
          }
          request.headers.set("Authorization", `Token ${this.token.b64}`);
          console.log("request: ", request);

          // const encodedAuth = Buffer.from(`${this.username}:${this.password}`).toString('base64');
          // request.headers.set("Authorization", `Basic ${encodedAuth}`); ;
        }
          return request;
        });
        
        hc.client.interceptors.response.use(async (response: any) => {
          if (response.status === 200) {
            //  console.log(`request to ${response.url} was successful`);
          }
          return response;
        });

       
    };

    async  refreshToken(): Promise<{
        b64: string;
        expires: number;
      } | null> {
        const options = {
          body: {
            LoginName: this.username,
            Password: this.password,
            ApplicationName:hcApplicationName,
          },
          baseUrl: this.baseUrl,
          url: "/auth-tokens",
        };
        const _token = await hc.client.post(options);
        if ("error" in _token && _token.error) {
          console.log("error: ", _token.error);
          return null;
        } else if ("data" in _token && _token.data) {
          if (
            _token.data["AuthToken"] &&
            _token.data["IssuedOn"] &&
            _token.data["ExpiresIn"]
          ) {
            return {
              b64: btoa(_token.data["AuthToken"]),
              expires: new Date().valueOf() + _token.data["ExpiresIn"] * 3600000,
            };
          } else {
            return null;
          }
        }
      };

      async createExchangeMailbox(userDetail:hc.ExgAddMailboxDto_Request): Promise<void>
    {
        try {
          
          this.token = await this.refreshToken();
            console.log("starting");
            const { data, error } = await hc.exgMailboxAddExgMailbox({
            body:userDetail
            });
            if (error) {
             
              console.log("error: ", error);
            }
            if (data) {
             
              console.log("data: ", data);
            }
          } catch (err) {
           
            console.log("error: ", err);
        }
    };

  async getMailboxByMailboxName(displayName: string): Promise<hc.ExgMailboxDto_List | null> {
    try {
      console.log("starting");
      const { data, error } = await hc.exgMailboxGetAllExgMailboxs({
        query: {
          currentPage: 1,
          pageSize: 1,
          displayName: displayName
        }
      });

      if (data && data.TotalRecords > 0) {
        if (data.Mailboxes.find(x => x.DisplayName === displayName)) {
          var mailboxDetails = data.Mailboxes.find(x => x.DisplayName === displayName)
          return mailboxDetails;
        }
      }
      if(error)
      {
       
        console.log("error: ", error);
      }
    }
    catch (error) {
     
      console.log("error: ", error);
    }
    return null;
  };

  async deleteUserMailbox(mailboxId: number): Promise<void> {
    try {
      console.log("starting");
      const { data, error } = await hc.exgMailboxDeleteExgMailbox({
        path: {
          exgMailboxId : mailboxId
        }
      });
      if (error) {
       
        console.log("error: ", error);
      }
      if (data) {
       
        console.log("data: ", data);
      }
    } catch (error) {
     
      console.log("error: ", error);
    }
  };

}

export default HcServiceClient;