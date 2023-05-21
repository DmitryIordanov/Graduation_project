<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class IndexController extends Controller{

    /**
     * @return mixed
     */
    public function __invoke(){
        $posts = Post::paginate(6)->items();
        return $posts;
    }
}
