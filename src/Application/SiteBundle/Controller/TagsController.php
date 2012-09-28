<?php

namespace Application\SiteBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\View;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class TagsController extends FOSRestController
{
    /**
     * @View()
     */
    public function getAction()
    {
        return array(
            "success" => true,
            "tags" => $this->getDoctrine()->getRepository("ApplicationSiteBundle:Tag")->findAll()
        );
    }
}
