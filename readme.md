# ✨ Official Whatsapp Business API Client Package

Visit Official [API Documentation](https://www.postman.com/meta/whatsapp-business-platform/overview).
And Visit [Platform WhatsApp Business](https://developers.facebook.com/docs/whatsapp) for more information.

## Installation

```bash
npm install @mimamch/whatsapp
```

## Usage

### Import package into your code

```js
import whatsapp from "@mimamch/whatsapp";
// or for CommonJS
const whatsapp = require("@mimamch/whatsapp");
```

### Create instance

```js
const client = whatsapp.createClient({
  accessToken: "YOUR_ACCESS_TOKEN",
  waBusinessAccountid: "YOUR_WA_BUSINESS_ACCOUNT_ID",
});
```

### 🚀 Send your first OTP message

⚠️ **Note**: You need to create an auth OTP template with copy code action

```js
await client.utils.sendOtpWithCopyCode({
  phoneNumberId: "YOUR_PHONE_NUMBER_ID", // get this ID from https://developers.facebook.com
  to: "YOUR_ACTIVE_PHONE_NUMBER", // including country code
  templateName: "YOUR_OTP_TEMPLATE_ID",
  templateLanguageCode: "en_US", // en_US | id | etc.
  code: "123456", // Your OTP Code
});
```
