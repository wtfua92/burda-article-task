<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontendController extends AbstractController
{
    /**
     * @param string $slug
     * @param int $urlId
     *
     * @Cache(expires="+1 minutes", maxage="60", smaxage="60", public=true)
     *
     * @Route(
     *     "/{slug}_{urlId}",
     *     name="burda_articles",
     *     requirements={
     *         "urlId" : "\d+"
     *       }
     * )
     *
     * @return Response
     */
    public function index($slug, $urlId)
    {
        $dataDir = $this->getParameter('kernel.project_dir') . '/data/json';
        $file = $dataDir . '/' . $slug . '_' . $urlId . '.json';

        if (file_exists($file)) {
            $data = json_decode(file_get_contents($file), true);
            $error = (json_last_error() !== 0) ? json_last_error_msg() : '';
        } else {
            $error = 'File ' . $file . ' not found!';
            $data = array();
        }

        return $this->render('article.html.twig', array(
            'data' => $data,
            'error' => $error
        ));
    }
}
