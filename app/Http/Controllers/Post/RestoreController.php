<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class RestoreController extends Controller{

    /**
     * @param $res
     * @return bool|null
     */
    public function __invoke($res){
        $posts = Post::withTrashed()->find($res);
        $restore = $posts->restore();
        return $restore;
    }
}
