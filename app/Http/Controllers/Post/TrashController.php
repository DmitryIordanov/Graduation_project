<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class TrashController extends Controller{

    public function __invoke(){
        $posts = Post::onlyTrashed()->get();
        return $posts;
    }
}
