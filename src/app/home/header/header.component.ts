import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http} from '@angular/http';
import { RequestService } from '../../services/request.service';


declare var $:any;
declare var layer:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:Http,private requestService : RequestService,private router : Router) { }

  ngOnInit() {
  }
  // logout=()=>{
  //   this.router.navigate(['/login']);
  // }
  logout=()=>{
    $.ajax({
      type:'get',
      url: this.requestService.IP+'/web/common/logout',
      // rossDomain: true,
      // xhrFields: {            //带上Cookie
      //   withCredentials: true
      // },

      success:(res)=>{
        layer.msg('退出成功');
        this.router.navigate(['/login']);
      },
      error:()=>{
        layer.msg('退出失败');
      }
    });
  };
  changePwd=()=>{
    var oldPwd = $.trim($('#oldPwd').val());
    var newPwd1= $.trim($('#newPwd1').val());
    var newPwd2= $.trim($('#newPwd2').val());
    // console.log(oldPwd+newPwd1+newPwd2);
    if(oldPwd==''){
      layer.msg('旧密码不能为空');
      return;
    } else if(newPwd1 == ''){
      layer.msg('新密码不能为空');
      return;
    } else if(newPwd1 == oldPwd){
      layer.msg('新旧密码不能一样');
      return;
    } else if(newPwd1!=newPwd2){
      layer.msg('两次输入的密码不相同');
      return;
    }else {
      $.ajax({
        type:'post',
        url:this.requestService.IP+'/web/common/modify_password',
        data:{
          old:oldPwd,
          password:newPwd1
        },
        rossDomain: true,
        xhrFields: {            //带上Cookie
          withCredentials: true
        },
        success:(res)=>{
          // console.log(res);
          if(res.code ==1001){
            layer.msg('输入的密码错误');
            return
          }
          if(res.code == 6){
            layer.msg('输入不全');
          }
          else {
            $('.btn-close').click();
            layer.msg('修改成功');
          }
        },
        error:()=>{
          layer.msg('请求失败');
        }
      })
    }

    //修改密码请求

  }
}
