using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username {get; set;}


        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Hasło musi się mieć 4 - 8 znaków")]
        public string Password {get; set;}
    }
}