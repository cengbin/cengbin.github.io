# 骨骼动画

https://blog.csdn.net/xzben/article/details/51823263  spine动画讲解

Spine的结构
Skeleton(骨架)-->Bone（骨骼）-->Slot（插槽）--> Attachment(附件)。 而动画中的图片资源都是通过附件来存储的。

在spine的源文件由一个 xxx.atlas 文件  xxx.json 文件构成
 xxx.atlas 文件其实就相当于我们的 plist 合图。 
xxx.json 就是我们的动画描述文件，里面包含了。 skeleton、bone、slot、skin、animation、event 的描述。
在解析后，所有图片附件都是元始于  skin 的，然后会挂载在 slot 下，也就是如果要换皮就需要替换 skin 和 slot 下对应的 attachment。

## 前端对待动画的态度

很多前端同学似乎不太在意动画，认为这只是一个辅助能力，业务逻辑才是最重要的，其他的全都靠后站，就算是有时间也要看心情再决定搞不搞,我的看法是，业务逻辑当然是要放在首位的，但是同样也不要小看了其余的细枝末节，例如动画，一个体验良好的动效完全可以吸引用户的更多停留，以一种通用的方式从侧面提升业务的转化效果，某些特定场景下，其所能起到的作用甚至可以与业务的目标并驾齐驱
