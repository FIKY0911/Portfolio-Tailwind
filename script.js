const profilePic = document.getElementById('profilePic');
const profileImage = document.getElementById('profileImage');

profilePic.addEventListener('change', () => {
    profileImage.src = URL.createObjectURL(profilePic.files[0]);
});