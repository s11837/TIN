using System;
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

        [Required]
        public string Plec { get; set; }
        [Required]  
        public string Pseudonim { get; set; }

        [Required]
        public DateTime Dataurodzenia { get; set; }

        [Required]
        public string Miasto { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public UserForRegisterDto ()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}