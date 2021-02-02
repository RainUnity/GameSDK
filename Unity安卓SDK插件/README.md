Unity安卓SDK插件SDK

#### 介绍
{**用于方便调用Java端的方法，更加快速的接入SDk**

#### 如有疑问或者更好的建议？？？可以加群476899717进行详细交流

#### 软件架构
该插件分为主流的.net3.5 .net4.0和.net4.5版本，主要用于各版本的unity编辑器内

#### 使用说明
1.将对应版本文件夹内的文件都拖到unity项目中
2.在需要的脚本中引入using MMoSDK，并在调用前初始化(一般可以放在Awake中)，举个栗子，如脚本名叫test.cs

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using MMoSDK;

public class test : MonoBehaviour {

  public Button btn;

  void Awake()
    {
	    //SDK初始化
        MMoSDK.MMoSDK.Init();
    }
	
	 void btnclick()
    {
        Debug.LogError("按钮点击的方法");
		//调用对应的方法,假设Java端的方法名是wxlogin，在这里我不传参数，当然也可以根据项目需求传入对应的参数
        MMoSDK.MMoSDK.Call("wxlogin");
    }

}

```
