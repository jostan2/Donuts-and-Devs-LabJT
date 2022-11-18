using System;
using System.Collections.Generic;

namespace Donuts_and_Devs_LabJT.Models;

public partial class Donut
{
    public int Id { get; set; }

    public string? ResultsRef { get; set; }

    public string? ResultsName { get; set; }

    public string? ResultsPhoto { get; set; }

    public string? ResultsPhotoAttribution { get; set; }
}
