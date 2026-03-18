// 模拟后台白名单手机号
const allowedPhones = ['133****0715', 
                       '13816812419'
                       '18621845725'
                       
                       
                       '13800138000'];

// 图形验证码
document.getElementById('getCaptcha').addEventListener('click', () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  document.querySelector('.captcha-img').textContent = `${a}X${b}=?`;
});

// 发送短信验证码
document.getElementById('sendSms').addEventListener('click', () => {
  const phone = document.getElementById('phone').value;
  if (!allowedPhones.includes(phone)) {
    alert('该手机号未在后台录入，无法获取验证码');
    return;
  }
  alert('验证码已发送至您的手机');
  // 这里可以接入真实短信API
});

// 表单提交后跳转到旋转验证页
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'verify.html'; // 先跳转到旋转验证页
});
