using Microsoft.AspNetCore.Mvc;
using SPDMov.Services;
using SPDMov.ViewModels;

namespace SPDMov.Controllers.Web
{
    public class AppController : Controller
    {
        private INewsletterService _newsletterService;
        public AppController(INewsletterService newsletterService) 
        {
            _newsletterService = newsletterService;
        }
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Network()
        {
            return View();
        }
 
        public IActionResult Article()
        {
            ViewBag.ArticleId = RouteData.Values["id"];
            return View();
        }

        public IActionResult NewsItem()
        {
            ViewBag.NewsItemId = RouteData.Values["id"];
            return View();
        }

        public IActionResult AllNews()
        {      
            return View();
        }

        
    
        [HttpPost]
        public ActionResult SubmitEmail(NewsletterViewModel model)
        {
            string redirectUrl =
                string.Format(
                "{0}#{1}",
                Url.Action("Index"),
                "Newsletter");
            
            _newsletterService.SubscribeNewsletter(model.Email);
            TempData["Result"] = "Obrigado por subscrever.";
            return new RedirectResult(redirectUrl);
        }

    }
}
