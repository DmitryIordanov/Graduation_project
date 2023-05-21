<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class LastPostController extends Controller{

    /**
     * @return null[]
     */
    public function __invoke(){
        $posts = Post::paginate(6)->lastPage();
        $arr = ['totalPages' => $posts <= 1 ? null : $posts];
        return $arr;
    }
}
