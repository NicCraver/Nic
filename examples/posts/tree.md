---
title: 使用tree生成目录树结构
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-07-15-36
date: 2019-07-15
tags: 
  - display
categories:
  - 文章
--- 
> 使用tree生成目录树结构
``` sh
tree /F
```
当你在当前目录下使用tree /F或者tree /a 这两个命令时,你会发现,它会把所有文件目录结构都给你打印出来

```
E:.                                            
│  .gitignore                                  
│  deploy.sh                                   
│  LICENSE                                     
│  package.json                                
│  README.md                                   
│  yarn.lock                                   
│                                              
├─blog                                         
│  ├─.vuepress                                 
│  │  │  config.js                             
│  │  │                                        
│  │  └─public                                 
│  │          cover.jpg                        
│  │          cover1.jpg                        
│  │          logo.png                         
│  │          logo1.png                        
│  │                                           
│  ├─about                                     
│  │      index.md                             
│  │                                           
│  ├─doc                                       
│  │      Vue-admin-layout-template.md         
│  │      vuepress-plugin-blog-multidir.md     
│  │      vuepress-theme-ououe.md              
│  │                                           
│  └─posts                                     
│          1.md                                
│          2.md                                
│          3.md                                
│          tree.md                             
│          Vue-Markdown.md                     
│                                              
└─dist                                         
    │  404.html                                
    │  cover.jpg                               
    │  cover1.jpg                              
    │  index.html                               
    │  logo.png                                
    │  logo1.png                               
    │                                          
    ├─about                                    
    │      index.html                          
    │                                          
    ├─assets                                   
    │  ├─css                                   
    │  │      0.styles.917f4b29.css            
    │  │                                       
    │  ├─img                                   
    │  │      search.83621669.svg              
    │  │                                       
    │  └─js                                    
    │          2.33b716b6.js                   
    │          3.4d264132.js                   
    │          4.8b08d018.js                   
    │          5.37787e5f.js                   
    │          6.3ff8174d.js                   
    │          7.dd165190.js                   
    │          8.b5f25105.js                   
    │          app.cb9e64d0.js                 
    │                                          
    ├─category                                 
    │  │  index.html                           
    │  │                                       
    │  ├─documentation                         
    │  │      index.html                       
    │  │                                       
    │  └─futurama                              
    │          index.html                      
    │                                          
    ├─doc                                      
    │      index.html                          
    │      vuepress-plugin-blog-multidir.html  
    │      vuepress-theme-ououe.html           
    │                                          
    ├─posts                                    
    │      1.html                              
    │      2.html                              
    │      3.html                              
    │      index.html                          
    │                                          
    └─tag                                      
        │  index.html                          
        │                                      
        ├─about                                
        │      index.html                      
        │                                      
        ├─display                              
        │      index.html                      
        │                                      
        ├─vue                                  
        │      index.html                      
        │                                      
        ├─vuepress                             
        │      index.html                      
        │                                      
        └─vuepress-plugin-blog-multidir        
                index.html       
```              