<?php

namespace Distribution\DemoBundle\DataFixtures\ORM;


use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\FixtureInterface;

use Application\SiteBundle\Entity\Tag;
use Application\SiteBundle\Entity\Snippet;

class LoadDefaultData implements FixtureInterface, ContainerAwareInterface
{
    private $container;
    
    public function load(ObjectManager $manager)
    {
        $faker = $this->getFaker();

        $tags = array(
            'symfony' => null,
            'form' => null,
            'general' => null,
            'web2' => null,
            'PHP' => null,
            'CSS' => null,
            'XML' => null,
            'Plain Text' => null,
            'Common' => null,
        );

        foreach($tags as $tagName => $null) {
            $tag = new Tag();            
            $tag->setName($tagName);

            $tags[$tagName] = $tag;
            $manager->persist($tag);
        }

        $syntaxes = array(
            'C', 'C++', 'C#', 'Clojure', 'CoffeeScript', 'Common Lisp', 'CSS',
            'Perl', 'PHP', 'Python', 'Shell', 'XML'
        );

        foreach (range(1, 100) as $id) {
            $snippet = new Snippet();
            $snippet->setTitle($faker->sentence(6));
            $snippetSyntax = array_rand($syntaxes);
            $snippet->setSyntax($syntaxes[$snippetSyntax]);
            $snippet->setUpdatedAt($faker->dateTimeThisYear());

            $snippetTags = array_rand($tags, 4);
            foreach($snippetTags as $snippetTag) {
                $snippet->addTag($tags[$snippetTag]);
            }

            $snippet->setContent($faker->text(200));

            $manager->persist($snippet);
        }

        $manager->flush();
        
    }

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    /**
     * @return \Faker\Generator
     */
    public function getFaker()
    {
        return $this->container->get('faker.generator');
    }
}
