using analyst_challenge_2.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace analyst_challenge_2.Context
{
    public class SensoresContext : DbContext
    {
        public SensoresContext(DbContextOptions<SensoresContext> options)
        : base(options)
        {

        }

        public virtual DbSet<Leitura> Leitura { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Leitura>(entity =>
            {
                entity.HasKey(e => e.codigo);
            });

            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 1, status = Enums.Status.Processado, tag = "brasil.sudeste.sensor01", timeStamp =  DateTime.Now, valor = "700" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 2, status = Enums.Status.Processado, tag = "brasil.sudeste.sensor01", timeStamp = DateTime.Now, valor = "500" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 3, status = Enums.Status.Erro, tag = "brasil.sudeste.sensor02", timeStamp = DateTime.Now, valor = "Teste" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 4, status = Enums.Status.Processado, tag = "brasil.sudeste.sensor03", timeStamp = DateTime.Now, valor = "700" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 5, status = Enums.Status.Processado, tag = "brasil.nordeste.sensor01", timeStamp = DateTime.Now, valor = "700" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 6, status = Enums.Status.Processado, tag = "brasil.nordeste.sensor01", timeStamp = DateTime.Now, valor = "900" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 7, status = Enums.Status.Processado, tag = "brasil.nordeste.sensor01", timeStamp = DateTime.Now, valor = "200" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 8, status = Enums.Status.Processado, tag = "brasil.nordeste.sensor02", timeStamp = DateTime.Now, valor = "450" });
            modelBuilder.Entity<Leitura>().HasData(new Leitura { codigo = 9, status = Enums.Status.Erro, tag = "brasil.nordeste.sensor03", timeStamp = DateTime.Now, valor = "Teste" });
        }
    }
}
