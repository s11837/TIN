using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public byte[] PasswordHash { get; set; }

        [Required]
        public byte[] PasswordSalt { get; set; }

        public string Plec { get; set; }

        public DateTime DataUrodzenia { get; set; }

        public string Pseudonim { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public string Opis { get; set; }

        public string Miasto { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}