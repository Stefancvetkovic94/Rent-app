namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mig1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AppUsers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FullName = c.String(),
                        Email = c.String(),
                        BirthDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Approved = c.Boolean(nullable: false),
                        ManagerCreationAllowed = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PictureConfirmations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PictureUrl = c.String(),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AppUsers", t => t.User_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Ratings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Rated = c.Int(nullable: false),
                        Comment = c.String(),
                        Date = c.DateTime(nullable: false),
                        Service_Id = c.Int(),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Services", t => t.Service_Id)
                .ForeignKey("dbo.AppUsers", t => t.User_Id)
                .Index(t => t.Service_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Services",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        LogoUrl = c.String(),
                        Email = c.String(),
                        Description = c.String(),
                        Approved = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Branches",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Address = c.String(),
                        PictureUrl = c.String(),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                        Service_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Services", t => t.Service_Id)
                .Index(t => t.Service_Id);
            
            CreateTable(
                "dbo.Vehicles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Model = c.String(),
                        Manufacturer = c.String(),
                        Year = c.Int(nullable: false),
                        Pictureurl = c.String(),
                        Description = c.String(),
                        CostPerHour = c.Double(nullable: false),
                        Branch_Id = c.Int(),
                        VehicleType_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Services", t => t.Branch_Id)
                .ForeignKey("dbo.VehicleTypes", t => t.VehicleType_Id)
                .Index(t => t.Branch_Id)
                .Index(t => t.VehicleType_Id);
            
            CreateTable(
                "dbo.Reservations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TimeStart = c.DateTime(nullable: false),
                        TimeEnd = c.DateTime(nullable: false),
                        User_Id = c.Int(),
                        Vehicle_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AppUsers", t => t.User_Id)
                .ForeignKey("dbo.Vehicles", t => t.Vehicle_Id)
                .Index(t => t.User_Id)
                .Index(t => t.Vehicle_Id);
            
            CreateTable(
                "dbo.VehicleTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TypeName = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        AppUserId = c.Int(nullable: false),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AppUsers", t => t.AppUserId, cascadeDelete: true)
                .Index(t => t.AppUserId)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUsers", "AppUserId", "dbo.AppUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.Ratings", "User_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Vehicles", "VehicleType_Id", "dbo.VehicleTypes");
            DropForeignKey("dbo.Reservations", "Vehicle_Id", "dbo.Vehicles");
            DropForeignKey("dbo.Reservations", "User_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Vehicles", "Branch_Id", "dbo.Services");
            DropForeignKey("dbo.Ratings", "Service_Id", "dbo.Services");
            DropForeignKey("dbo.Branches", "Service_Id", "dbo.Services");
            DropForeignKey("dbo.PictureConfirmations", "User_Id", "dbo.AppUsers");
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUsers", new[] { "AppUserId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.Reservations", new[] { "Vehicle_Id" });
            DropIndex("dbo.Reservations", new[] { "User_Id" });
            DropIndex("dbo.Vehicles", new[] { "VehicleType_Id" });
            DropIndex("dbo.Vehicles", new[] { "Branch_Id" });
            DropIndex("dbo.Branches", new[] { "Service_Id" });
            DropIndex("dbo.Ratings", new[] { "User_Id" });
            DropIndex("dbo.Ratings", new[] { "Service_Id" });
            DropIndex("dbo.PictureConfirmations", new[] { "User_Id" });
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.VehicleTypes");
            DropTable("dbo.Reservations");
            DropTable("dbo.Vehicles");
            DropTable("dbo.Branches");
            DropTable("dbo.Services");
            DropTable("dbo.Ratings");
            DropTable("dbo.PictureConfirmations");
            DropTable("dbo.AppUsers");
        }
    }
}
