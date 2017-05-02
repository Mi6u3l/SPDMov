using System.ComponentModel.DataAnnotations;

namespace SPDMov.ViewModels
{
    public class NewsletterViewModel 
    {
        [Required(ErrorMessage = "Por favor insira o E-mail.")]
        [EmailAddress(ErrorMessage = "E-mail inválido.")]
        public string Email { get; set; }
    }

}