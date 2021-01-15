using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        void Update(UserProfile userProfile);
        public UserProfile GetByFirebaseUserId(string firebaseUserId);
        public void Add(UserProfile userProfile);
    }
}