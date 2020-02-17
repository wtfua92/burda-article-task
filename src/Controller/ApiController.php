<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    /**
     * @param string $slug
     * @param int $urlId
     *
     * @Cache(expires="+1 minutes", maxage="60", smaxage="60", public=true)
     *
     * @Route(
     *     "/api/{slug}_{urlId}",
     *     name="burda_api",
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
        $error = null;

        if (file_exists($file)) {
            $data = json_decode(file_get_contents($file), true);
            $error = (json_last_error() !== 0) ? json_last_error_msg() : '';
        } else {
            $error = 'File ' . $file . ' not found!';
            $data = array();
        }

        if ($error) {
            $this->json($error, 500);
        }

        return $this->json($data);
    }
}