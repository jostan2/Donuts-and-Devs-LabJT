using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Donuts_and_Devs_LabJT.Models;

public partial class DonutsContext : DbContext
{
    public DonutsContext()
    {
    }

    public DonutsContext(DbContextOptions<DonutsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Donut> Donuts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Donuts;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Donut>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__donuts__3213E83F9AEB275D");

            entity.ToTable("donuts");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ResultsName)
                .HasMaxLength(25)
                .HasColumnName("results_name");
            entity.Property(e => e.ResultsPhoto)
                .HasMaxLength(62)
                .HasColumnName("results_photo");
            entity.Property(e => e.ResultsPhotoAttribution)
                .HasMaxLength(97)
                .HasColumnName("results_photo_attribution");
            entity.Property(e => e.ResultsRef)
                .HasMaxLength(55)
                .HasColumnName("results_ref");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
