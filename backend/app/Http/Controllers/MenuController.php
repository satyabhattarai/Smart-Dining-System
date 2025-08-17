<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function fetchMenu()
    {
        $var =  Menu::all();
        return response()->json($var);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'alt' => 'nullable|string',
            'waiting_time' => 'nullable|integer',
            'ingredients' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // validate image
        ]);

        $menu = new Menu();
        $menu->name = $request->name;
        $menu->price = $request->price;
        $menu->description = $request->description;
        $menu->alt = $request->alt;
        $menu->waiting_time = $request->waiting_time;
        $menu->ingredients = $request->ingredients;

        // handle image
        if ($request->hasFile('image')) {
            $filePath = $request->file('image')->store('menufolder', 'public');
            $menu->image = $filePath; // store filename in DB
        }

        $menu->save();

        return response()->json(['message' => 'Menu added successfully!']);
    }
}
