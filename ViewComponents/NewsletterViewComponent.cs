using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SPDMov.ViewComponents {
   public class NewsletterViewComponent : ViewComponent {
     public IViewComponentResult Invoke() 
     {
      
        return View();
     }  
   } 
}