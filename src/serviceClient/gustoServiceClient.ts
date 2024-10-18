import { gustoBaseURL, gustoClientId, gustoClientSecret, redirectURI } from "../config";
import { AccessTokenResponse, Employee } from "../models/employee";
import {encodeURIParams, writeMessageLogs} from '../helpers/gustoAppHelper';

class GustoServiceClient {
    private readonly clientId: string;
    private readonly clientSecret: string;
    private readonly redirectUri: string;
    private readonly baseUrl: string;
    public static accessToken: string | null;
    public static lastTokenDetails : AccessTokenResponse | null = null;
  
    constructor() {
      this.clientId = gustoClientId;
      this.clientSecret = gustoClientSecret;
      this.redirectUri = redirectURI;
      this.baseUrl = gustoBaseURL;
      //GustoServiceClient.accessToken = "DbPFrZ4ZjZIDBhLIS99C7kGJVcemPtfo7q00pVbTvw0";
    }

  

  static oauthLogin():string {
  var url= `${gustoBaseURL}/oauth/authorize`;
  var params = encodeURIParams({
    client_id: gustoClientId,
    redirect_uri: redirectURI,
    response_type: 'code',
    state:'test',
    scope:'employee:read'
  });
 
  return `${url}?${params}` ;
}
async authorizeUsingAuthorizationCode(code:any): Promise<void> {
  try {
    const url = `${this.baseUrl}/oauth/token`;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      code: code,
      grant_type: 'authorization_code',
    });

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: body.toString()
    });

    if (!response.ok) {
      writeMessageLogs(response.status.toString() + response.text());
      throw new Error(`Response status: ${response.status}`);
    }

    const json:AccessTokenResponse = await response.json();
    GustoServiceClient.lastTokenDetails= json;
    GustoServiceClient.accessToken = json.access_token;

  } catch (error) {
    console.error('Error authorizing:', error);
    throw error;
  }
}
async refreshToken(): Promise<void> {
  try {
    const url = `${this.baseUrl}/oauth/token`;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: GustoServiceClient.lastTokenDetails.refresh_token,
      grant_type: 'refresh_token',
    });

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: body.toString()
    });

    if (!response.ok) {
      writeMessageLogs(response.status.toString() + response.text());
      throw new Error(`Response status: ${response.status}`);
    }

    const json:AccessTokenResponse = await response.json();
    GustoServiceClient.lastTokenDetails= json;
    GustoServiceClient.accessToken = json.access_token;

  } catch (error) {
    console.error('Error authorizing:', error);
    throw error;
  }
}

    async authorize(): Promise<void> {
      try {
        const url = `${this.baseUrl}/oauth/token`;
        const headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        const body = new URLSearchParams({
          grant_type: 'system_access',
          client_id: this.clientId,
          client_secret: this.clientSecret,
          //redirect_uri: this.redirectUri
        });
  
        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: body.toString()
        });
  
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
  
        const json = await response.json();
        GustoServiceClient.lastTokenDetails= json;
    GustoServiceClient.accessToken = json.access_token;

      } catch (error) {
        writeMessageLogs(error);
        console.error('Error authorizing:', error);
        throw error;
      }
    }
    
    async getEmployee(id: string): Promise<Employee | null> {
      try {
        if (!GustoServiceClient.accessToken) {
          throw new Error('Access token is not available. Please authorize first.');
        }
  
        const response = await fetch(`${this.baseUrl}/v1/employees/${id}?include=custom_fields`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${GustoServiceClient.accessToken}`,
            'Content-Type': 'application/json',
            'X-Gusto-API-Version':'2024-04-01'
          }
        });
  
        if (!response.ok) {
          writeMessageLogs(response.status.toString() + response.text());
          throw new Error(`Response status: ${response.status}`);
        }
  
        const json: Employee = await response.json();
        writeMessageLogs(json);
        return json;
      } catch (error) {
        console.error('Error getting employee:', error);
        //throw error;
      }
      return null;
    }
}

export default GustoServiceClient;


