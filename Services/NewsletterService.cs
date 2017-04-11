using System.Net;

namespace SPDMov.Services {
    public class NewsletterService : INewsletterService {
        public async void SubscribeNewsletter(string email)
        {
            string sharePointUrl = "http://23.94.156.22:8090";
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(sharePointUrl + "/_vti_bin/NewsletterService.svc/SubmitEmail/" + email);
            request.Method = "GET";
            request.ContentType = "application/json;odata=verbose";
            WebResponse response = await request.GetResponseAsync();
        }
  
    
    }
                
}