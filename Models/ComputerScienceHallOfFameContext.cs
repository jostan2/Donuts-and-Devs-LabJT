using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Donuts_and_Devs_LabJT.Models;

public partial class ComputerScienceHallOfFameContext : DbContext
{
    public ComputerScienceHallOfFameContext()
    {
    }

    public ComputerScienceHallOfFameContext(DbContextOptions<ComputerScienceHallOfFameContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ComputerScienceHallOfFame> ComputerScienceHallOfFame1lists { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Computer_Science_Hall_Of_Fame;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ComputerScienceHallOfFame>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__computer__3213E83F48ED16D8");

            entity.ToTable("computer_science_hall_of_fame_1list");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompleteFirstName)
                .HasMaxLength(10)
                .HasColumnName("complete_firstName");
            entity.Property(e => e.CompleteInnovation)
                .HasMaxLength(87)
                .HasColumnName("complete_innovation");
            entity.Property(e => e.CompleteLastName)
                .HasMaxLength(11)
                .HasColumnName("complete_lastName");
            entity.Property(e => e.CompleteYear).HasColumnName("complete_year");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
