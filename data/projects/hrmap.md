---
date: 2024-08-23 18:40:00 +300
title: "hrmap"
slug: hrmap
tech:
  [
    "React",
    "Tailwind",
    "MSSQL",
    ".NET",
    "ASP.NET Core Identity",
    "Entity Framework Core ",
  ]
icon: /images/work/hrmap-icon.png
github: https://github.com/hasanyurdakul/hrmap
ios:
active: true
tagline: Human Resources Management System
---

<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png"  />
</p>

<p fontSize=14 align="center">
hrmap
</p>

**"hrmap"**, insan kaynakları süreçlerini kolaylaştırmak için tasarlanmış bir **B2B SaaS** İnsan Kaynakları Yönetim Sistemi **(HRMS)** uygulamasıdır. Şirketlerin çalışan bilgilerini yönetmesine, izin ve masraf taleplerini işlemeye ve şirket etkinliklerini tek bir platformda düzenlemesine olanak tanır.

**"hrmap"**, birden fazla firmanın personel bilgilerini, izinlerini ve masraflarını yönetebileceği bir İnsan Kaynakları Yönetim Sistemi (HRMS) uygulamasıdır. Uygulamada, dört farklı kullanıcı tipi bulunmaktadır:

- **Admin**: "hrmap" uygulaması yöneticisi.
- **CompanyOwner**: "hrmap" uygulamasına abone olmuş şirketin sahibi.
- **CompanyManager**: "hrmap" uygulamasına abone olmuş şirketin yöneticisi.
- **CompanyUser**: "hrmap" uygulamasına abone olmuş şirketin personeli.

Şirket yetkilisi, **"hrmap"** tarafına başvurur "**CompanyOwner**" rolünde hesap oluşturulur. Admin, şirket adına hesap açtıktan sonra, sisteme giriş izni verilir. "**CompanyOwner**" rolündeki kullanıcı, aynı şirkette çalışan "**CompanyManager**" rolündeki kullanıcıları sisteme ekler ve erişim izni verir. "**CompanyManager**", personelleri sisteme ekleyip ilk giriş parolalarını göndererek onların sistemi kullanmalarını sağlar.

Personeller, izin taleplerini **oluşturabilecek** ve masraflarını yöneticilerine **onaya gönderebilecektir**. Yöneticiler ise gelen talepleri **onaylayıp reddedebilecektir**. Uygulama, tatil günleri, resmi tatiller, yaklaşan etkinlikler ve doğum günleri gibi bilgileri ana sayfada gösterecektir.

<p align="center" >
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />  
</p>

### Kurulum

**1.**

```bash
$ git  clone  https://github.com/hasanyurdakul/hrmap.git
```

**2.**
HRMS.API dizininde bulunan appsettings.json dosyasında MSSQL Connection Stringinizi giriniz.

**3.**

```bash
$ cd HRMS.API
$ dotnet restore
$ dotnet run
```

**4.**

```bash
$ cd HRMS_Client
$ npm install
$ npm run dev
```

<p align="center" >
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 /> 
</p>

### Akış

**1.**
Database başarıyla migrate edilmiş ve uygulamalar sorunsuz ayağa kalkmış ise,

```bash
username:Admin
password:Admin123.
```

kullanıcısı ile **"Admin" rolünde** uygulamaya giriş yapabilirsiniz.

**2.**
İlk olarak bir şirket kayıt edin. Ardından bu şirkete bir kullanıcı oluşturun. Oluşturduğunuz kullanıcı **CompanyOwner rolünde** olacaktır. Sistem, **otomatik bir parola** oluşturacak ve kullanıcının **mail adresine bu parolayı gönderecektir**.

**3.**
**CompanyOwner** rolünde oluşturduğunuz kullanıcı ile giriş yapın. Yeni bir kullanıcı oluştur bölümünden bir kullanıcı oluşturun. Oluşturduğunuz kullanıcı **CompanyManager rolünde** olacaktır. **Şifre ve mail akışları önceki adımla aynıdır**.

**4.**
**CompanyManager** rolündeki kullanıcınız, **CompanyUser rolündeki yetkisiz kullanıcıları oluşturabilir**. Bu roldeki kullanıcılar, şirketteki **personellerinize** oluşturacağınız kullanıcılar olacaktır. CompanyManager rolündeki kullanıcınız, uygulama kullanıcısı oluşturmanın yanı sıra, personel listesine yeni personel ekleyebilir, personel bilgilerini görebilir, oluşturulmuş izin ve masraf taleplerini yönetebilir, şirket içi etkinlik oluşturabilir, yeni bir departman ve iş tanımı oluşturabilir.

**5.**
**CompanyUser** rolündeki kullanıcınız, iş arkadaşlarının iletişim bilgilerini ve kalan izin günlerini görebilir. İzin ve masraf **talebi** oluşturabilir. Onay veya red almış ya da hala sonuçlanmamış taleplerini sistem üzerinden görebilirler.

**6.**
**Tüm kullanıcılar**, yaklaşan personel doğum günlerini, yaklaşan şirket içi etkinlikleri, yaklaşan resmi tatilleri anasayfalarında görebileceklerdir.

<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />
</p>

![Anasayfa](https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/Screenshot%202024-08-23%20at%2015.54.41.png)

<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />
</p>

![Login](https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/Screenshot%202024-08-23%20at%2015.58.15.png)

<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />
</p>

![enter image description here](https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/Screenshot%202024-08-23%20at%2015.58.43.png)

<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />
</p>

![enter image description here](https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/Screenshot%202024-08-23%20at%2016.40.42.png)

<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />
</p>

![enter image description here](https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/Screenshot%202024-08-23%20at%2016.41.29.png)

<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/Screenshot%202024-08-23%20at%2016.44.46.png" width=350 />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/Screenshot%202024-08-23%20at%2018.32.04.png" width=650 />
</p>

<p align="center" >
  <img src="https://raw.githubusercontent.com/hasanyurdakul/hrmap/main/Screenshots/logo-icon.png" width=20 /> 
</p>
