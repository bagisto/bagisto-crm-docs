# Installation

<!-- ## Use our GUI installer
- [Download bagisto](https://bagisto.com/en/download/)
- Extract the contents of zip and execute the project in your browser for example:
    - `https://example.com/`
    - `https://localhost/bagisto/public`
    - `https://example.com/public` -->

## Install Bagisto using composer:
  
```
composer create-project bagisto/bagisto-crm
```

## Install Bagisto using command line:
  
- Start the installation script
```sh
php artisan bagisto-crm:install
```

### Features of this command
::: warning
It will check if the .env file is already created or not.  
**Only if the .env file already exists then please provide the following details**
::: 

```
-   APP_TIMEZONE
-   APP_LOCALE
-   LOG_CHANNEL
-   APP_CURRENCY
-   DB_DATABASE
-   DB_USERNAME
-   DB_PASSWORD
```

- After asking the following options it will start the installation
```sh
-  Please select the default locale or press enter to continue [en]: 
-  Please enter the default timezone [Asia/Kolkata]:
-  Please enter the default currency [USD]: 
-  What is the database name to be used by bagisto CRM?:
-  What is your database username?:
-  What is your database password?:
```

# Start using Bagisto CRM

### On a production server

- Go to your domain for example:
    - `https://example.com/`
    - `https://localhost/bagisto-crm/public`
    - `https://example.com/public`

### On your local device

```sh
php artisan serve
```

### How to login as admin:

Go to `https://example.com/admin/login`, in case you used `php artisan bagisto:install` use the following credentials
```
email: admin@example.com
password: admin123
```