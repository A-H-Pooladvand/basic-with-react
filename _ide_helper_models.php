<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\Menu
 *
 * @property int $id
 * @property int|null $parent_id
 * @property string $title
 * @property string $path
 * @property string|null $icon
 * @property string $permission
 * @property string $type
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Menu[] $children
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Menu whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Menu whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Menu whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Menu wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Menu wherePermission($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Menu whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Menu whereType($value)
 */
	class Menu extends \Eloquent {}
}

namespace App{
/**
 * App\Module
 *
 * @property int $id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Module whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Module whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Module whereUpdatedAt($value)
 */
	class Module extends \Eloquent {}
}

namespace App{
/**
 * App\DataType
 *
 */
	class DataType extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

