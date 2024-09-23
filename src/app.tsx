import * as sdk from "./sdk/services.gen";

// configure internal service client
sdk.client.setConfig({
  baseUrl: "http://hostingcontrollerdemo.com:8798/",
  headers: {
    Authorization: "Token MTBjOGE4ZjgtODZiYy00M2U4LTg0OGUtYWNhZjJjNTNlNDE4",
  },
});

sdk.client.interceptors.response.use((response: any) => {
  if (response.status === 200) {
    console.log(`request to ${response.url} was successful`);
  }
  return response;
});
export async function App() {

  try {
  console.log("starting deleting");
  const { data, error } = await sdk.exgMailboxDeleteExgMailbox({
    path: {
      exgMailboxId: 55936,
    },
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
}

// try {
//   console.log("starting");
//   const { data, error } = sdk.exgMailboxAddExgMailbox({
//     body: {
//       CreateNewUser: true,
//       MailboxType: "usermailbox",
//       DisplayName: "hc4@contoso-hc.ca",
//       Password: "P@ssw0rd",
//       MaildomainName: "contoso-hc.ca",
//       CResourceId: 9,
//       OrganizationId: 564,
//     },
//   });
//   if (error) {
//     console.log("error: ", error);
//   }
//   if (data) {
//     console.log("data: ", data);
//   }
// } catch (err) {
//   console.log("error: ", err);
// }
App();
