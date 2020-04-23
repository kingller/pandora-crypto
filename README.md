# pandora-crypto
Javascript Crypto Library for AES and sha256 which support web and nodejs

## Install

```bash
npm install pandora-crypto
``` 

## Usage

### AES

AES 加密解密。默认使用`gcm`模式。

#### createKey 生成密钥

```javascript
import Crypto from 'pandora-crypto';

Crypto.AES.createKey();
```

使用该方法生成密钥后，会缓存该密钥，使用加密（encrypt）或解密（decrypt）方法时也可不提供密钥。

#### encrypt 加密

```javascript
import Crypto from 'pandora-crypto';

Crypto.AES.encrypt(data, '密钥');
```

该方法会先执行JSON.stringify(data)，将数据转为json格式的字符串，然后使用AES加密。

#### decrypt 解密

```javascript
import Crypto from 'pandora-crypto';

Crypto.AES.decrypt('encrypted message', '密钥');
```

该方法会使用AES解密，再执行JSON.parse，获取数据。

#### getKey 获取密钥

```javascript
import Crypto from 'pandora-crypto';

Crypto.AES.getKey();
```

#### setKey 设置密钥

```javascript
import Crypto from 'pandora-crypto';

Crypto.AES.setKey('密钥');
```

#### clearKey 清除密钥

```javascript
import Crypto from 'pandora-crypto';

Crypto.AES.clearKey();
```

### SHA256

```javascript
import Crypto from 'pandora-crypto';

Crypto.SHA256('message');
```
