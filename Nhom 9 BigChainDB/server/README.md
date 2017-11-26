## createUser
**URL: `/api/create_user`** \
**Method: `POST`**

**Tham số**
- is_lec: boolean
- email: String
- name: String
-coin_name: String

**Kết quả trả về**
json chứa
- success: boolean 
- publickey: String
- privatekey: string

## login
**URL: `/api/authenticate`** \
**Method: `POST`**

**Tham số**
- publicKey
- privateKey

**Kết quả trả về**
 json chứa
 - success: boolean
 - token: String
 
## listUser
**URL: `/api/users`** \
**Method: `GET`**

**Header**
x-access-token: String

**Tham số**

**Kết quả trả về** 
- Danh sach user

## makeCoin
**URL: `/api/create`** \
**Method: `GET`**

**Header**
x-access-token: String

**Tham số**
- number: int

**Kết quả trả về** 
- success: boolean

## currentPoint
**URL: `/api/current`** \
**Method: `GET`**

**Header**
x-access-token: String

**Tham số**
- coin_name: String

**Kết quả trả về**
- số coin của tài khoản ứng với tên

## transferPoint
**URL: `/api/transfer`** \
**Method: `POST`**

**Header**
x-access-token: String

**Tham số**
- rceiver: publickey 
-  number: int
- coin_name: string

**Kết quả trả về**
- success: boolean



