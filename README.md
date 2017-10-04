Sample Bundle to add button to edit form
===================

Source from Akeneo documentation example.

How to add an action button :
https://docs.akeneo.com/2.0/design_pim/guides/add_a_custom_button_to_product_edit_form.html

How to use
----------

Clone directory into _**src/Web200/Bundle**_

Edit _**app/AppKernel.php**_ file
Add _**new Web200\Bundle\ButtonBundle\Web200ButtonBundle()**_
```php
    protected function registerProjectBundles()
    {
        return [
            // your app bundles should be registered here
            new Acme\Bundle\AppBundle\AcmeAppBundle(),
            new Web200\Bundle\ButtonBundle\Web200ButtonBundle()
        ];
    }
```

Don't forget to clear cache and generate js

With docker
```
docker-compose exec fpm bin/console --env=dev cache:clear --no-warmup
docker-compose exec fpm bin/console --env=dev pim:installer:assets --symlink --clean
docker-compose exec fpm npm run webpack-watch
```

Without docker
```
php bin/console --env=dev cache:clear --no-warmup
php bin/console --env=dev pim:installer:assets --symlink --clean
npm run webpack-watch
```