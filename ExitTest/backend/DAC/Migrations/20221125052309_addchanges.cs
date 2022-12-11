using Microsoft.EntityFrameworkCore.Migrations;

namespace DAC.Migrations
{
    public partial class addchanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Rate",
                table: "Camps",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Capacity",
                table: "Camps",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BookingDates",
                table: "Camps",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Camps",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BookingDates",
                table: "Bookings",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BookingDates",
                table: "Camps");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Camps");

            migrationBuilder.DropColumn(
                name: "BookingDates",
                table: "Bookings");

            migrationBuilder.AlterColumn<string>(
                name: "Rate",
                table: "Camps",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "Capacity",
                table: "Camps",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}
