using System;
using System.Collections.Generic;
using DatingApp.API.Models;

namespace DatingApp.API.Dtos
{
    public class UserForDetailedDto
    {
         public int Id { get; set; }
        public string Username { get; set; }

        public string Plec { get; set; }

        public int Age  { get; set; }

        public string Pseudonim { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public string Opis { get; set; }

        public string Miasto { get; set; }

        public string PhotoUrl { get; set; }

        public ICollection<PhotosForDetailedDto>  Photos { get; set; }
    }
}