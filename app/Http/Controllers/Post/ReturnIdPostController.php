<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class ReturnIdPostController extends Controller{

    /**
     * @param $id
     * @return mixed
     */
    public function __invoke($id){
        $posts = Post::find($id);
        return $posts;
    }
}
