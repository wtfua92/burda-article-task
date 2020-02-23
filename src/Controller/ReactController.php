<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactController extends AbstractController
{
    /**
     * @param string $slug
     * @param int $urlId
     *
     * @Cache(expires="+1 minutes", maxage="60", smaxage="60", public=true)
     *
     * @Route(
     *     "/index.html",
     *     name="react_burda_articles",
     * )
     *
     * @return Response
     */
    public function index()
    {
        return $this->render('react/index.html');
    }
}
