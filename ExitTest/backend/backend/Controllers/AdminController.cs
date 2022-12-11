using AutoMapper;
using DAC.Entities;
using DAC.Repository;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _adminRepository = null;

        private readonly IMapper _mapper;
        public AdminController(IAdminRepository adminRepository, IMapper mapper)
        {
            _adminRepository = adminRepository;
            _mapper = mapper;
        }

        [HttpGet, Route("all-admins")]
        public async Task<List<Admin>> GetAdmins()
        {
            return await _adminRepository.GetAdmins();
        }
        [HttpPost, Route("login")]
        public async Task<bool> Login(AdminModel adminModel)
        {
            try
            {
                if (adminModel == null)
                    throw new Exception("Admin can't be null.");
                if (string.IsNullOrEmpty(adminModel.Email))
                    throw new Exception("Email can't be null or, empty.");
                if (string.IsNullOrEmpty(adminModel.Password))
                    throw new Exception("Password can't be null or, empty.");

                Admin admin = _mapper.Map<AdminModel, Admin>(adminModel);

                return await _adminRepository.Login(admin);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost, Route("add-new-camp")]
        public async Task<Guid> AddNewCamp(CampModel campModel)
        {
            try
            {
                if (campModel == null)
                    throw new Exception("Camp can't be null.");
                if (string.IsNullOrEmpty(campModel.Title))
                    throw new Exception("Title can't be null or empty.");
                if (string.IsNullOrEmpty(campModel.Description))
                    throw new Exception("Description can't be null or empty.");

                Camp camp = _mapper.Map<CampModel, Camp>(campModel);

                //string folder = "campImages";
                //folder += Guid.NewGuid().ToString() + camp.CampImage.FileName;
                //string serverFolder = Path.Combine(_webHostEnvironment.WebRootPath + folder);
                //await camp.CampImage.CopyToAsync(new FileStream(serverFolder, FileMode.Create));
                //return true;

                return await _adminRepository.AddNewCamp(camp);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpPost, Route("update-camp")]
        public async Task<bool> UpdateCamp(CampModel campModel)
        {
            try
            {
                if (campModel == null)
                    throw new Exception("Camp can't be null.");
                if (string.IsNullOrEmpty(campModel.Title))
                    throw new Exception("Title can't be null or empty.");
                if (string.IsNullOrEmpty(campModel.Description))
                    throw new Exception("Description can't be null or empty.");

                Camp camp = _mapper.Map<CampModel, Camp>(campModel);

                //string folder = "campImages";
                //folder += Guid.NewGuid().ToString() + camp.CampImage.FileName;
                //string serverFolder = Path.Combine(_webHostEnvironment.WebRootPath + folder);
                //await camp.CampImage.CopyToAsync(new FileStream(serverFolder, FileMode.Create));
                //return true;

                return await _adminRepository.UpdateCamp(camp);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost, Route("delete-camp")]
        public async Task<bool> DeleteCamp(CampModel campModel)
        {
            try
            {
                if (campModel == null)
                    throw new Exception("Camp can't be null.");
                if (string.IsNullOrEmpty(campModel.Title))
                    throw new Exception("Title can't be null or empty.");
                if (string.IsNullOrEmpty(campModel.Description))
                    throw new Exception("Description can't be null or empty.");
                return await _adminRepository.DeleteCamp(campModel.Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
