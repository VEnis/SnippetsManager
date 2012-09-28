<?php

namespace Application\SiteBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\View;

class SnippetsController extends FOSRestController
{
    /**
     * @View()
     */
    public function getAction()
    {
        return array(
            "success" => true,
            "snippets" => $this->getDoctrine()->getRepository("ApplicationSiteBundle:Snippet")->findAll()
        );
    }
}
