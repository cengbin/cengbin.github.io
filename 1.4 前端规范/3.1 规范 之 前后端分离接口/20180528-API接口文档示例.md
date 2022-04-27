# Longhash Address内页接口文档 

## 地址模糊查询

### 1 接口说明

可以通过接口来进行模糊查询，返回地址列表。

### 2 请求方式

**请求链接：**<http://116.62.210.86:5000/api/addressSearch/searchString>

**请求方法：**GET

**请求体：**

| 参数         | 描述       | 是否必填 | 数据类型 |
| :----------- | ---------- | -------- | -------- |
| searchString | 查询字符串 | 是       | String   |

### 3 返回结果

数据格式JSON如下：

| 参数   | 描述                           | 数据类型 |
| ------ | ------------------------------ | -------- |
| status | 返回标志符成功时为1,失败时为-1 | Number   |
| msg    | 返回结果描述                   | String   |
| result | 返回地址列表                   | Array    |

### 4 参数示例

入参：

```json
search = "1ND"
```

返回：

```json
{
    "status":1,
    "msg":"搜索成功",
    "result":[
      "1NDsoXSIso4iS8pOks2asIsl8fjaGsa0M2",
      "1NDxslf5lmG0alNso8Asb06snaH7bnX9KJ",
      "1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s"
    ]
}
```



## 地址评分获取接口

### 1 接口说明

可以通过接口来查询地址的评分。

### 2 请求方式

**请求链接：**<http://116.62.210.86:5000/api/addressScore>

**请求方法：**GET

**请求体：**

| 参数    | 描述   |
| ------- | ------ |
| address | String |

### 3 返回结果

数据格式JSON如下：

| 参数   | 描述                           | 数据类型 |
| ------ | ------------------------------ | -------- |
| status | 返回标志符成功时为1,失败时为-1 | Number   |
| score  | 返回地址评分                   | Number   |

### 4 参数示例

入参：

```json
address = "1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s"
```

返回：

```json
{
    "status": 1,
  	"score": 89
}
```



## 地址三层分类接口

### 1 接口说明

获取该地址三层地址分类信息。

### 2 请求方式

**请求链接：**<http://116.62.210.86:5000/api/address_labelling/address>

**请求方法：**GET

**请求体：**

| 参数    | 描述   |
| ------- | ------ |
| address | String |

### 3 返回结果

| 参数           | 描述       | 数据类型   |
| -------------- | ---------- | ---------- |
| label0_percent | 第一层分类 | JsonObject |
| label1_percent | 第二层分类 | JsonObject |
| label2_percent | 第三层分类 | JsonObject |

label_percent如下：

| 参数     | 描述               | 数据类型 |
| -------- | ------------------ | -------- |
| exchange | 是exchange的可能性 | Number   |
| gambling | 是gambling的可能性 | Number   |
| old      | 是old的可能性      | Number   |
| pool     | 是pool的可能性     | Number   |
| service  | 是service的可能性  | Number   |

### 4 参数示例

入参：

```json
address = "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
```

返回：

```json
{
    "label0_percent":{"exchange":0,
                      "gambling":0,
                      "old":0,
                      "pool":0,
                      "service":0},
    "label1_percent":{"exchange":0.9264705882352942,
                      "gambling":0.0,
                      "old":0.0,
                      "pool":0.0,
                      "service":0.07352941176470588},
    "label2_percent":{"exchange":0.8210526315789474,
                      "gambling":0.007017543859649123,
                      "old":0.0,
                      "pool":0.028070175438596492,
                      "service":0.14385964912280702}
}
```



## 地址数据接口

### 1 接口说明

获取该地址当前和历史的balance，received，sent和transactions数据。

### 2 请求方式

**请求链接：**<http://116.62.210.86:5000/api/address_data/address>

**请求方法：**GET

**请求体：**

| 参数    | 描述   |
| ------- | ------ |
| address | String |

### 3 返回结果

数据格式JSON如下：

| 参数         | 描述         | 数据类型   |
| ------------ | ------------ | ---------- |
| address_data | 返回结果描述 | JsonObject |

Address_data如下：

| 参数     | 描述     | 数据类型   |
| -------- | -------- | ---------- |
| realtime | 实时数据 | JsonObject |
| history  | 历史数据 | JsonObject |

realtime如下：

| 参数         | 描述           | 数据类型 |
| ------------ | -------------- | -------- |
| received     | 收到比特币数量 | Number   |
| sent         | 用出比特币数量 | Number   |
| transactions | 交易量         | Number   |
| balance      | 余额           | Number   |

history如下：

| 参数     | 描述     | 数据类型   |
| -------- | -------- | ---------- |
| dateData | 日期数据 | JsonObject |

dateData如下：

| 参数         | 描述           | 数据类型 |
| ------------ | -------------- | -------- |
| received     | 收到比特币数量 | Number   |
| sent         | 用出比特币数量 | Number   |
| transactions | 交易量         | Number   |
| balance      | 余额           | Number   |

### 4 参数示例

入参：

```json
address = "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
```

返回：

```json
{
    "realtime":{
        "received":787,
        "sent":232,
        "transactions":19,
        "balance":989
    },
    "history":{
    	"20160801":{
            "received":787,
            "sent":232,
            "transactions":19,
            "balance":989
        },
        "20160701":{
            "received":787,
            "sent":232,
            "transactions":19,
            "balance":989
        },
        "20160601":{
            "received":787,
            "sent":232,
            "transactions":19,
            "balance":989
        },
        "20160501":{
            "received":787,
            "sent":232,
            "transactions":19,
            "balance":989
        }
	}
}
```



## 地址关系接口

### 1 接口说明

获取该地址近三层的地址关系。

### 2 请求方式

**请求链接：**<http://116.62.210.86:5000/api/address_plot/address>

**请求方法：**GET

**请求体：**

| 参数    | 描述   |
| ------- | ------ |
| address | String |

### 3 返回结果

数据格式JSON如下：

| 参数        | 描述         | 数据类型   |
| ----------- | ------------ | ---------- |
| addressPlot | 返回结果描述 | JsonObject |

addressPlot如下：

| 参数      | 描述                               | 数据类型 |
| --------- | ---------------------------------- | -------- |
| address   | 地址                               | String   |
| balance   | 余额                               | String   |
| type      | 地质类型，逗号前面是实例，逗号后面 | String   |
| ~transfer | 下一层地址                         | Array    |

### 4 参数示例

入参：

```json
address = "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
```

返回：

```json
{
    "address":"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
    "balance":0,
    "type":"Pool, SlushPool.com",
    "~transfer":[
        {
            "address":"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "balance":0,
            "type":"Exchange, Binance.com",
            "~transfer":[
                {
                    "address":"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "balance":0,
                    "type":"Null, Null",
                    "~transfer":[]
                },
                {
                    "address":"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "balance":0,
                    "type":"old, Silkroad.com",
                    "~transfer":[]
                }
            ]
        },
        {
            "address":"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "balance":0,
            "type":"Null, Null",
            "~transfer":[]
        },
        {
            "address":"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "balance":0,
            "type":"Null, Null",
            "~transfer":[]
        }
    ]	
}
```



## 地址交易量接口

### 1 接口说明

获取该地址和其他地址的交易量信息。

### 2 请求方式

**请求链接：**<http://116.62.210.86:5000/api/addressTx>

**请求方法：**POST

**请求体：**

| 参数    | 描述 | 数据类型 |
| ------- | ---- | -------- |
| address | 地址 | String   |

### 3 返回结果

数据格式JSON如下：

| 参数   | 描述          | 数据类型   |
| ------ | ------------- | ---------- |
| txData | 返回block数据 | JsonObject |

txData如下：

| 参数 | 描述 | 数据类型    |
| ---- | ---- | ----------- |
| from | 来源 | ObjectArray |
| to   | 输出 | ObjectArray |

object如下：

| 参数    | 描述     | 数据类型 |
| ------- | -------- | -------- |
| address | 地址列表 | Array    |
| Amout   | 金额     | Number   |

### 4 参数示例

入参：

```json
address = "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
```

返回：

```json
{
    "from":[
        {
            "address":[
                        "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                        "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                        "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
                      ],
            "amount":80
    	},
    	{
            "address":[
                        "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                        "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                        "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
                      ],
            "amount":80
    	},
		{
            "address":[
                        "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
                      ],
            "amount":80
    	}
    ],
    "to":[
        {
            "address":[
            		"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
                  ],
        	"amount":80
        },
        {
            "address":[
            		"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
                  ],
        	"amount":80
        },
        {
            "address":[
            		"16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
                    "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
                  ],
        	"amount":80
        },
    ]
}
```



## 地址区块信息接口

### 1 接口说明

获取该地址近三层的地址关系。

### 2 请求方式

**请求链接：**<http://116.62.210.86:5000/api/address_block

**请求方法：**POST

**请求体：**

| 参数    | 描述 |
| ------- | ---- |
| dataMap | Json |

dataMap数据如下：

| 参数    | 描述                | 数据类型 |
| ------- | ------------------- | -------- |
| address | 地址                | String   |
| page    | 页码，一页20个block | Number   |

### 3 返回结果

数据格式JSON如下：

| 参数      | 描述          | 数据类型   |
| --------- | ------------- | ---------- |
| blockData | 返回block数据 | JsonObject |

blockData如下：

| 参数        | 描述     | 数据类型 |
| ----------- | -------- | -------- |
| blockHeight | 区块高度 | String   |
| blockInfo   | 区块数据 | String   |

blockInfo如下：

| 参数   | 描述     | 数据类型 |
| ------ | -------- | -------- |
| date   | 区块高度 | String   |
| input  | 输出     | Number   |
| output | 输入     | Number   |
| from   | 地址来源 | Array    |
| to     | 付款地址 | Array    |

### 4 参数示例

入参：

```json
address = "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
```

返回：

```json
{
    "80898":{
    	"date":"20180827",
        "input":1000,
        "output":800,
        "from":[
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
        ],
        "to":[
          "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
           "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
           "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"  
        ]
    },
    "80897":{
    	"date":"20180827",
        "input":1000,
        "output":800,
        "from":[
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
        ],
        "to":[
          "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
           "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
           "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"  
        ]
    },
    "80896":{
    	"date":"20180827",
        "input":1000,
        "output":800,
        "from":[
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
            "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"
        ],
        "to":[
          "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
           "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG",
           "16bk4PdZfN2aMK4RvCTEipfUXjuevzGdVG"  
        ]
    }
    
}
```

