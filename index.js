const loginBox = new Vue({
  el: '.login-box',
  data: {
    account: '',
    password: '',
    isAgree: '',
    accountIsEmpty: true,
    passwordIsEmpty: true,
    buttonIsDisabled: true
  },
  methods: {
    login: function() {
      if (this.buttonIsDisabled) return;
      if (this.account.replace(/\D/g, '') === '12345678910' && this.password === '12345678910') {
        alert("登陆成功！");
        window.open('https://www.4399.com');
      } else {
        alert("账号或密码错误！");
      }
    },
    checkButton: function() {
      if (this.account.replace(/\D/g, '').length === 11 && this.password.length > 6 && this.isAgree) this.buttonIsDisabled = false;
      else this.buttonIsDisabled = true;
      // console.log(this.buttonIsDisabled);
    }
  },
  watch: {
    account: function() {
      this.account = this.account.replace(/\D/g, '');
      this.accountIsEmpty = this.account.length === 0;
      let formattedAccount = this.account;
      if (this.account.length > 3)
        formattedAccount = this.account.substring(0, 3) + ' ' + this.account.substring(3);
      if (this.account.length > 7)
        formattedAccount = formattedAccount.substring(0, 8) + ' ' + formattedAccount.substring(8);
      this.account = formattedAccount;
      this.checkButton();
    },
    password: function() {
      this.password = this.password.trim();
      this.passwordIsEmpty = this.password.length === 0;
      this.checkButton();
    },
    isAgree: function() {
      this.checkButton();
    }
  }
})
