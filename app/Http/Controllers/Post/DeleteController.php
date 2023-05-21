<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class DeleteController extends Controller{

    /**
     * @param $del
     * @return mixed
     */
    public function __invoke($del){
        $posts = Post::find($del);
        $delete = $posts->delete();
        return $delete;
    }
}
