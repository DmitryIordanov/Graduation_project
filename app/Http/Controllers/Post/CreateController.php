<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class CreateController extends Controller{

    /**
     * @param $title
     * @param $body
     * @param $image
     * @return mixed
     */
    public function __invoke($title, $body, $image){
        $url = '/assets/upload/';
        $posts = Post::create(
            [
                'title' => $title,
                'body' => $body,
                'image' => $url . $image,
            ]
        );
        return $posts;
    }
}
