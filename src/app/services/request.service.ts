import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
declare var $:any;
declare var layer:any;

@Injectable()

export class RequestService {

  IP: any;
  tt: any = 1;
  provinces: any = 1;

  constructor(private http: Http, private router: Router) {
    // this.IP = 'http://192.168.0.180:8080';

    // this.IP = "http://192.168.0.180:8080";
    this.IP= 'http://120.78.195.17:8080'   //线上
    //  this.IP ="http://120.78.195.17:8080" //
  }

  logout() {
    const url = this.IP + '/web/common/logout';
    return this.http.get(url);
  }
}


  // areaProvince(){
  //     const url = this.IP +'/web/common/area/province';
  //     let headers = new Headers();
  //     let cookie = document.cookie;
  //     headers.set('Content-Type', 'application/json');
  //     return this.http.get(url,{headers: headers});
  //   }
//   areaProvince=()=>{
//     $.ajax({
//       type:'get',
//       url:'http://192.168.0.180:8080/web/common/area/province',
//       rossDomain: true,
//       xhrFields: {            //带上Cookie
//         withCredentials: true
//       },
//
//       success:(res)=>{
//         if(res.code == 1){
//           layer.msg('请重新登录');
//           this.router.navigate(['/login']);
//           return;
//         }else if(res.code == 0){
//           this.provinces = res.data;
//         }
//       },
//       error:()=>{
//         layer.msg("网络连接失败")
//       }
//     });
//     // areaCity=(pid)=>{
//     //
//     // }
//   //
//   //
//   //
//   //   // this.requestService.login(account,password,captcha).subscribe(res=>{
//   //   //
//   //   //   console.log(res.json().code);
//   //   //   res.json().code==''?(layer.msg('服务器连接失败，请稍后尝试'),$('#loading_con').fadeOut()):(this.router.navigate(['/login']));
//   //   //   if(res.json().code == 1001){
//   //   //     // layer.msg('账号或密码错误');
//   //   //     $('#loading_con').fadeOut();
//   //   //     layer.msg("账号或密码错误");
//   //   //   } else if(res.json().code == 1002){
//   //   //     this.timestamp = new Date().getTime();
//   //   //     layer.msg("验证码错误");
//   //   //     // console.log(sessionStorage.type);
//   //   //     }else if(res.json().code == 1003){
//   //   //     this.timestamp = new Date().getTime();
//   //   //     $('.captcha').css('display','inline-block');
//   //   //     layer.msg("密码错误次数过多，请输入验证码");
//   //   //     return;
//   //   //   }else if(res.json().code == 1005){
//   //   //     layer.msg("账户被锁定，请联系管理员");
//   //   //   }else if(res.json().code == 1006){
//   //   //     layer.msg("该用户不存在");
//   //   //   }else if(res.json().code == 6){
//   //   //     layer.msg("信息填写不完整");
//   //   //   }else {
//   //   //     layer.msg("登录成功");
//   //   //     this.router.navigate(['/home']);
//   //   //   }
//   //   //     // $('#loading_con').fadeOut()
//   //   //   $('#loading_con').fadeOut();
//   //   //
//   //   //   // sessionStorage.communityName = res.json().target.communityName;
//   //   //   /*console.log(sessionStorage.communityId);
//   //   //   console.log(sessionStorage.position);
//   //   //    this.router.navigate(['/home']);
//   //   //   console.log(sessionStorage.tokenId);
//   //   //   console.log(sessionStorage.type);*/
//   //   // },erro=>{
//   //   //   layer.msg('服务器连接失败');
//   //   //   $('#loading_con').fadeOut();//this.router.navigate(['/home']);
//   //   // })
//   // };
//
//
//
//   // login(accountNo,password,captcha){
//   //   const url = this.IP +'/login.do';
//   //   let body = 'accountNo='+accountNo+'&password=' +password+ '&captcha='+captcha;
//   //   let headers = new Headers();
//   //   headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//   //   return this.http.post(url,body,{headers: headers});
//   // }
//   // 登录
//
//   // 获取验证码
//
//
// }
