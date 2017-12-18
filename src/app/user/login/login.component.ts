import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http} from '@angular/http';
import { RequestService } from '../../services/request.service';

declare var $:any;
declare var layer:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  timestamp:any;
  wait:any=60;
  IP:any;

  constructor(private http:Http,private requestService : RequestService,private router : Router) { }

  ngOnInit() {
    // sessionStorage.communityId = '';
    // sessionStorage.communityName = '';
    // sessionStorage.position = '';
    // sessionStorage.alias = '';
    // sessionStorage.accountNo = '';
    // sessionStorage.accountid = '';
    // sessionStorage.tele = '';
    // sessionStorage.type = '';
    // sessionStorage.superCheck = '';
    // sessionStorage.tokenId = '';
    this.IP =this.requestService.IP
  }


  //登录
  login=()=>{
    $('#loading_con').fadeIn();
    if($('#account').val()==''||$('#account').val()==" "){
      $(this).addClass('text-danger');
      layer.msg('账号不能为空');$('#loading_con').fadeOut();
      return;
    }
    if($('#password').val()==''||$('#account').val()==" "){
      $(this).addClass('text-danger');
      layer.msg('密码不能为空');$('#loading_con').fadeOut();
      return;
    }
    let account=$('#account').val();
    let password=$('#password').val();
    let captcha = $('#captcha').val();
    $.ajax({
      type:'post',
      url:this.requestService.IP+'/login.do',
      data:{
        accountNo:account,
        password:password,
        captcha:captcha
      },

      rossDomain: true,
      xhrFields: {            //带上Cookie
        withCredentials: true
      },

      success:(res)=>{
        if(res.code == 1001){
                layer.msg('账号或密码错误');
                $('#loading_con').fadeOut();
                layer.msg("账号或密码错误");
              } else if(res.code == 1002){
                this.timestamp = new Date().getTime();
                layer.msg("验证码错误");
                }else if(res.code == 1003){
                this.timestamp = new Date().getTime();
                $('.captcha').css('display','inline-block');
                layer.msg("密码错误次数过多，请输入验证码");
              }else if(res.code == 1005){
                layer.msg("账户被锁定，请联系管理员");
              }else if(res.code == 1006){
                layer.msg("该用户不存在");
              }else if(res.code == 6){
                layer.msg("信息填写不完整");
              }else {
                layer.msg("登录成功");
                this.router.navigate(['/home']);
              }

      },
      error:()=>{
        alert("信息请失败")
      }
    });




    // this.requestService.login(account,password,captcha).subscribe(res=>{
    //
    //   console.log(res.json().code);
    //   res.json().code==''?(layer.msg('服务器连接失败，请稍后尝试'),$('#loading_con').fadeOut()):(this.router.navigate(['/login']));
    //   if(res.json().code == 1001){
    //     // layer.msg('账号或密码错误');
    //     $('#loading_con').fadeOut();
    //     layer.msg("账号或密码错误");
    //   } else if(res.json().code == 1002){
    //     this.timestamp = new Date().getTime();
    //     layer.msg("验证码错误");
    //     // console.log(sessionStorage.type);
    //     }else if(res.json().code == 1003){
    //     this.timestamp = new Date().getTime();
    //     $('.captcha').css('display','inline-block');
    //     layer.msg("密码错误次数过多，请输入验证码");
    //     return;
    //   }else if(res.json().code == 1005){
    //     layer.msg("账户被锁定，请联系管理员");
    //   }else if(res.json().code == 1006){
    //     layer.msg("该用户不存在");
    //   }else if(res.json().code == 6){
    //     layer.msg("信息填写不完整");
    //   }else {
    //     layer.msg("登录成功");
    //     this.router.navigate(['/home']);
    //   }
    //     // $('#loading_con').fadeOut()
    //   $('#loading_con').fadeOut();
    //
    //   // sessionStorage.communityName = res.json().target.communityName;
    //   /*console.log(sessionStorage.communityId);
    //   console.log(sessionStorage.position);
    //    this.router.navigate(['/home']);
    //   console.log(sessionStorage.tokenId);
    //   console.log(sessionStorage.type);*/
    // },erro=>{
    //   layer.msg('服务器连接失败');
    //   $('#loading_con').fadeOut();//this.router.navigate(['/home']);
    // })
  };
  //注册
  register=()=>{
    var accountNumber = $.trim($('#accountNumber').val());
    var password1= $.trim($('#password1').val());
    var password2= $.trim($('#password2').val());
    // console.log(oldPwd+newPwd1+newPwd2);
    if(accountNumber==''){
      layer.msg('账号不能为空');
      return;
    } else if(password1 == ''){
      layer.msg('密码不能为空');
      return;
    } else if(password2!=password2){
      layer.msg('两次输入的密码不相同');
      return;
    }else {
      $.ajax({
        type:'post',
        url:this.requestService.IP+'/register',
        data:{
          accountNo:accountNumber,
          password:password1
        },
        rossDomain: true,
        xhrFields: {            //带上Cookie
          withCredentials: true
        },
        success:(res)=>{
          console.log(res);
          if(res.code == 1007){
            layer.msg('账号已存在');
          }
          if(res.code == 6){
            layer.msg('输入不全');
          }
          if(res.code == 7){
            layer.msg('账户或者密码长度不对');
          }
          else {
            $('.btn-close').click();
            layer.msg('注册成功');
          }
        },
        error:()=>{
          layer.msg('请求失败');
        }
      })
    }

    //修改密码请求

  };
  //账号验证
  registerValidate=()=>{
    var accountNumber = $.trim($('#accountNumber').val());
    if(accountNumber.lenth<6){
      layer.msg('账号长度过短,请输入长于6位的账号');
      $('#accountConfirmation').removeClass('btn-info');
      $('#accountConfirmation').addClass('btn-danger');
      return;
    }else if(accountNumber.lenth>20){
      layer.msg('账号长度过长，请输入短于20位的账号');
      $('#accountConfirmation').removeClass('btn-info');
      $('#accountConfirmation').addClass('btn-danger');
      return;
    }else if(accountNumber == ''){
      layer.msg("账号不能为空");
      $('#accountConfirmation').removeClass('btn-info');
      $('#accountConfirmation').addClass('btn-danger');
      return;
    }else {
      $.ajax({
        type:'post',
        url:this.requestService.IP+'/validate_account',
        data:{
          accountNo:accountNumber,
        },
        rossDomain: true,
        xhrFields: {            //带上Cookie
          withCredentials: true
        },
        success:(res)=>{
          console.log(res);
          if(res.code == 1007){
            layer.msg('账号已存在');
            $('#accountConfirmation').removeClass('btn-info');
            $('#accountConfirmation').addClass('btn-danger');
          }else if(res.code == 6){
            layer.msg('输入不全');
          } else {
            $('#accountConfirmation').removeClass('btn-danger');
            $('#accountConfirmation').removeClass('btn-info');
            $('#accountConfirmation').addClass('btn-success');
            layer.msg('恭喜你，账号可用');

          }
        },
        error:()=>{
          layer.msg('请求失败');
        }
      })
    }
  };


  //键盘回车触发登录
  onKeyLogin=()=>{
    this.login();
  };

  //获取时间戳
  getCaptcha=()=>{
    this.timestamp = new Date().getTime();
  };
  //获取验证码
  forgetEmailCaptcha=(event)=>{
    let account = $("#forgetAccountEmail").val();
    this.countDown(event);
    $.ajax({
      type: 'get',
      url: this.requestService.IP+'/forget_password',
      data:{
        accountNo:account
      },
      rossDomain: true,
      xhrFields: {            //带上Cookie
        withCredentials: true
      },

      success: (res) => {
        if (res.code == 1) {
          layer.msg('请重新登录');
          this.router.navigate(['/login']);
          return;
        } else if (res.code == 0) {
          // console.log(this.provinces);
        }else if (res.code == 1020){
          layer.msg('该账户未绑定任何手机或邮箱')
        }else if(res.code == 1006){
          layer.msg('账户不存在')
        }else if(res.code == 6){
          layer.msg('数据填写不全')
        } else if(res.code == 1019){
          layer.msg('重复的请求验证码需要等60秒')
        }else if(res.code == 500){
          layer.msg('获取验证码出错')
        }
      },
      error: () => {
        layer.msg('当前网络不好，绑定失败')
      }
    });
  };
  forgetPhoneCaptcha=(event)=>{
    let account = $("#forgetAccountPhone").val();
    this.countDown(event);
    $.ajax({
      type: 'get',
      url: this.requestService.IP+'/forget_password',
      data:{
        accountNo:account
      },
      rossDomain: true,
      xhrFields: {            //带上Cookie
        withCredentials: true
      },

      success: (res) => {
        if (res.code == 1) {
          layer.msg('请重新登录');
          this.router.navigate(['/login']);
          return;
        } else if (res.code == 0) {
          // console.log(this.provinces);
        }else if (res.code == 1020){
          layer.msg('该账户未绑定任何手机或邮箱')
        }else if(res.code == 1006){
          layer.msg('账户不存在')
        }else if(res.code == 6){
          layer.msg('数据填写不全')
        } else if(res.code == 1019){
          layer.msg('重复的请求验证码需要等60秒')
        }else if(res.code == 500){
          layer.msg('获取验证码出错')
        }
      },
      error: () => {
        layer.msg('当前网络不好')
      }
    });
  };

  //邮箱重置密码
  forgetEmailModify=()=>{
    let account = $.trim($("#forgetAccountEmail").val());
    let captcha = $.trim($("#forgetEmailCaptcha").val());
    let password1 =$.trim($("#forgetEmailPwd1").val());
    let password2 =$.trim($("#forgetEmailPwd2").val());
    if(account==''||captcha==""||password1==''||password2==''){
      layer.msg('输入信息不全');
      return;
    }
    if(password1!=password2){
      layer.msg('两次输入的密码不一样');
      return;
    }
    $.ajax({
      type: 'post',
      url: this.requestService.IP+'/forget_password',
      data:{
        captcha:captcha,
        accountNo:account,
        password:password1
      },
      rossDomain: true,
      xhrFields: {            //带上Cookie
        withCredentials: true
      },

      success: (res) => {
        if (res.code == 1) {
          layer.msg('请重新登录');
          this.router.navigate(['/login']);
          return;
        } else if (res.code == 0) {
          $('.close').click();
          layer.msg('修改成功')
        }else if (res.code == 1002){
          layer.msg('验证码错误')
        }else if(res.code == 504){
          layer.msg('操作超时')
        }else if(res.code == 6){
          layer.msg('数据填写不全')
        }
      },
      error: () => {
        layer.msg('当前网络不好')
      }
    });
  };

  //电话重置密码
  forgetPhoneModify=()=>{
    let account = $("#forgetAccountPhone").val();
    let captcha = $("#forgetPhoneCaptcha").val();
    let password1 =$("#forgetPhonePwd1").val();
    let password2 =$("#forgetPhonePwd2").val();
    if(password1!=password2){
      layer.msg('两次输入的密码不一样');
      return;
    }
    $.ajax({
      type: 'post',
      url: this.requestService.IP+'/forget_password',
      data:{
        captcha:captcha,
        accountNo:account,
        password:password1
      },
      rossDomain: true,
      xhrFields: {            //带上Cookie
        withCredentials: true
      },

      success: (res) => {
        if (res.code == 1) {
          layer.msg('请重新登录');
          this.router.navigate(['/login']);
          return;
        } else if (res.code == 0) {
          $('.close').click();
          layer.msg('修改成功')
        }else if (res.code == 1002){
          layer.msg('验证码错误')
        }else if(res.code == 504){
          layer.msg('操作超时')
        }else if(res.code == 6){
          layer.msg('数据填写不全')
        }
      },
      error: () => {
        layer.msg('当前网络不好')
      }
    });
  };

  //倒计时
  countDown=(event)=>{
    let that = this;
    if (this.wait == 0) {
      $(event.target).removeAttr("disabled");
      $(event.target).text("获取验证码");
      this.wait = 60;
    } else {
      $(event.target).attr("disabled", true);
      $(event.target).text(this.wait + "秒后重发") ;
      this.wait--;
      setTimeout(function() {
        that.countDown(event);
      }, 1000)
    }
  };


}
