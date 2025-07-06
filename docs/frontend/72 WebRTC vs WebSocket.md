# WebRTC vs WebSocket

为了更好地理解WebRTC的独特性，我们先来回顾一下 WebSocket 的主要特点：

*   WebSocket 是一种基于单个 TCP 连接的全双工°通信协议；
*   它允许服务器主动向客户端推送数据；
*   在 WebSocket API 中，浏览器和服务器只需完成一次握手，之后就能建立持久性的连接，并进行双向的数据传输。
关键区别：
*   通信类型：WebSocket 主要用于文本和二进制数据的实时交换，非常适合聊天应用、实时游戏等需要低延迟的数据传输场景。WebRTC 则专注于媒体流的实时传输，如视频和音频通话，具有更复杂的媒体处理能力。
*   建立连接：WebSocket 连接是建立在TCP上的，全双工的、持久的连接。WebRTC则是点対点的，利用 NAT 穿透技木（NAT 指的是网络地址转换，Network AddressTranslation）直接在浏览器之间建立连接，支