<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menu';
    protected $primaryKey = 'menu_unique_id';
    public $incrementing = false; // because our primary key is not auto-increment
    protected $keyType = 'string';

    protected $fillable = [
        'menu_unique_id',
        'name',
        'image',
        'category',
        'alt',
        'waiting_time',
        'desc',
        'price',
        'ingredients'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($menu) {
            if (empty($menu->menu_unique_id)) {
                do {
                    $id = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
                } while (self::where('menu_unique_id', $id)->exists());

                $menu->menu_unique_id = $id;
            }
        });
    }
}
