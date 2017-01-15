### CMakeLists automatically created with AutoVala
### Do not edit

set (DATADIR "${CMAKE_INSTALL_PREFIX}/${CMAKE_INSTALL_DATAROOTDIR}")
set (PKGDATADIR "${DATADIR}/shmupwarz")
set (GETTEXT_PACKAGE "shmupwarz")
set (RELEASE_NAME "shmupwarz")
set (CMAKE_C_FLAGS "")
set (PREFIX ${CMAKE_INSTALL_PREFIX})
set (VERSION "1.0.0")
set (TESTSRCDIR "${CMAKE_SOURCE_DIR}")
set (DOLLAR "$")

configure_file (${CMAKE_SOURCE_DIR}/src/Config.vala.cmake ${CMAKE_BINARY_DIR}/src/Config.vala)
add_definitions(-DGETTEXT_PACKAGE=\"${GETTEXT_PACKAGE}\")
set (VERSION "1.0.0")
add_definitions (${DEPS_CFLAGS})
link_libraries ( ${DEPS_LIBRARIES} )
link_directories ( ${DEPS_LIBRARY_DIRS} )
find_package (Vala REQUIRED)
include (ValaVersion)
ensure_vala_version ("0.30" MINIMUM)
include (ValaPrecompile)

set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_image)
set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_mixer)
set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_ttf)
set (VALA_PACKAGES ${VALA_PACKAGES} bosco)
set (VALA_PACKAGES ${VALA_PACKAGES} entitas)
set (VALA_PACKAGES ${VALA_PACKAGES} gee-0.8)
set (VALA_PACKAGES ${VALA_PACKAGES} json-glib-1.0)
set (VALA_PACKAGES ${VALA_PACKAGES} sdl2)
set (VALA_PACKAGES ${VALA_PACKAGES} gio-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} glib-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} gobject-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} overlap2d)

set (APP_SOURCES ${APP_SOURCES} ${CMAKE_CURRENT_BINARY_DIR}/Config.vala)
set (APP_SOURCES ${APP_SOURCES} Components.gs)
set (APP_SOURCES ${APP_SOURCES} Entities.gs)
set (APP_SOURCES ${APP_SOURCES} Game/GameScene.gs)
set (APP_SOURCES ${APP_SOURCES} Game/MenuScene.gs)
set (APP_SOURCES ${APP_SOURCES} Game/MenuUI.gs)
set (APP_SOURCES ${APP_SOURCES} Game/OptionUI.gs)
set (APP_SOURCES ${APP_SOURCES} Game/ScoreUI.gs)
set (APP_SOURCES ${APP_SOURCES} Game/ShmupWarzGame.gs)
set (APP_SOURCES ${APP_SOURCES} Shmup.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/CollisionSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ColorTweenSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/DestroySystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/EntitySpawningTimerSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ExpiringSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/HealthRenderSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/HudRenderSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/MovementSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/PlayerInputSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/RemoveOffscreenShipsSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/RenderPositionSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ScaleTweenSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/SoundEffectSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ViewManagerSystem.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/Overlap2D.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/ParseIt.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/SceneLoader.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/ToString.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/CompositeItemVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/CompositeVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/CoreActorData.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/Image9patchVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/LabelVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/LayerItemVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/MainItemVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/PhysicsBodyDataVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/PhysicsPropertiesVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/PointVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/ProjectInfoVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/ResolutionEntryVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/SceneVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/ShapeVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/data/SimpleImageVO.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/resources/IAssetLoader.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/resources/IDataLoader.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/resources/IResourceRetriever.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/resources/ResourceManager.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/scene2d/BuiltItemHandler.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/scene2d/ButtonClickListener.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/scene2d/CompositeActor.gs)
set (APP_SOURCES ${APP_SOURCES} o2d/utils/CustomVariables.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/ApplicationListener.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/Exceptions.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/Game.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/InputAdapter.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/InputProcessor.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/Screen.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/graphics/Color.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/graphics/Texture.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/graphics/s2d/Batch.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/graphics/s2d/NinePatch.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/graphics/s2d/TextureAtlas.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/graphics/s2d/TextureEnums.vala)
set (APP_SOURCES ${APP_SOURCES} sdx/graphics/s2d/TextureRegion.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/math/Rectangle.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/math/Vector2.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/Action.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/Actor.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/Event.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/Group.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/InputEvent.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/InputListener.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/Stage.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/ui/Image.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/ui/Label.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/ui/Scaling.vala)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/ui/Widget.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/BaseDrawable.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/ClickListener.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/Drawable.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/FocusEvent.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/FocusListener.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/Layout.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/NinePatchDrawable.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/TextureRegionDrawable.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/scenes/scene2d/utils/TransformDrawable.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/utils/Align.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/utils/Pool.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/utils/Pools.gs)
set (APP_SOURCES ${APP_SOURCES} sdx/utils/viewport/Viewport.gs)
set (APP_SOURCES ${APP_SOURCES} shmupwarz.vala)

set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --vapidir=${CMAKE_SOURCE_DIR}/src/vapis )

if ((${CMAKE_BUILD_TYPE} STREQUAL "Debug") OR (${CMAKE_BUILD_TYPE} STREQUAL "RelWithDebInfo"))
	set(COMPILE_OPTIONS ${COMPILE_OPTIONS} "-g")
endif()

set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --disable-warnings )
set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --gresources=${CMAKE_SOURCE_DIR}/data/o2d.gresource.xml )
set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --gresources=${CMAKE_SOURCE_DIR}/data/resources.gresource.xml )

set (CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -g" )

vala_precompile(VALA_C shmupwarz
	${APP_SOURCES}
PACKAGES
	${VALA_PACKAGES}
OPTIONS
	${COMPILE_OPTIONS}
)

SET (VALA_C ${VALA_C} ${o2d_gresource_xml_C_FILE})
SET (VALA_C ${VALA_C} ${resources_gresource_xml_C_FILE})
add_executable(shmupwarz ${VALA_C})
add_dependencies (shmupwarz o2d_gresource_xml)
add_dependencies (shmupwarz resources_gresource_xml)
target_link_libraries( shmupwarz m )


install(TARGETS
	shmupwarz
RUNTIME DESTINATION
	${CMAKE_INSTALL_BINDIR}
)
if(HAVE_VALADOC)
	valadoc(shmupwarz
		${CMAKE_BINARY_DIR}/valadoc/shmupwarz
		${APP_SOURCES}
	PACKAGES
		${VALA_PACKAGES}
	CUSTOM_VAPIS
		${CUSTOM_VAPIS_LIST}
	)
	install(DIRECTORY
		${CMAKE_BINARY_DIR}/valadoc
	DESTINATION
		${CMAKE_INSTALL_DATAROOTDIR}/doc/shmupwarz
	)
endif()
